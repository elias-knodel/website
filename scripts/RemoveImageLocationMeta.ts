import * as ExifReader from "exifreader";
import sharp from "sharp";

// Parse arguments
const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
    console.error("Usage: bun run read-remove-gps.ts <input-image> <output-image>");
    process.exit(1);
}

// 1. Read image as Buffer
const inputBuffer = await Bun.file(inputPath).arrayBuffer();
const imgBuffer = Buffer.from(inputBuffer);

// Log GPS EXIF
function logGPS(buffer: Buffer, label: string) {
    try {
        const tags = ExifReader.load(buffer.buffer);
        const lat = tags['GPSLatitude']?.description;
        const lon = tags['GPSLongitude']?.description;
        console.log(`--- ${label} ---`);
        console.log('Latitude:', lat);
        console.log('Longitude:', lon);
        Object.keys(tags).forEach((tag) => {
            if (tag.startsWith("GPS")) {
                console.log(`${tag}:`, tags[tag].description);
            }
        });
    } catch (e) {
        console.log(`Error parsing Exif metadata (${label}):`, e);
    }
}

logGPS(imgBuffer, "Original");

// 2. Remove all metadata & convert to PNG
const sharped = sharp(imgBuffer);
await sharped.jpeg().toFile(outputPath);

// 3. Read output and log GPS EXIF again
const outputBuffer = await Bun.file(outputPath).arrayBuffer();
logGPS(Buffer.from(outputBuffer), "After Removing Metadata & Converting to PNG");
