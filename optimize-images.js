const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'src', 'assets');
const backupDir = path.join(__dirname, 'src', 'assets', 'backup_images');

// Ensure backup directory exists
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

// Function to recursively get files
function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('backup_images')) {
                results = results.concat(getFiles(file));
            }
        } else {
            if (/\.(jpg|jpeg|png)$/i.test(file)) {
                results.push(file);
            }
        }
    });
    return results;
}

async function optimizeImages() {
    const files = getFiles(assetsDir);
    console.log(`Found ${files.length} images to process.`);

    for (const file of files) {
        const filename = path.basename(file);
        const backupPath = path.join(backupDir, filename); // flattening backup structure for simplicity, or could replicate structure

        // Backup
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(file, backupPath);
        }

        const image = sharp(file);
        const metadata = await image.metadata();

        let pipeline = image;

        // Resize if too large
        if (metadata.width > 1920) {
            pipeline = pipeline.resize(1920);
        }

        // Compress
        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        } else if (metadata.format === 'png') {
            pipeline = pipeline.png({ compressionLevel: 8, quality: 80 });
        }

        // Overwrite
        const tempPath = file + '.tmp';
        await pipeline.toFile(tempPath);
        fs.renameSync(tempPath, file);

        console.log(`Optimized: ${filename}`);
    }
    console.log('Image optimization complete.');
}

optimizeImages().catch(console.error);
