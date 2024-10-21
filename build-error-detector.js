const fs = require('fs');
const path = require('path');

function searchErrorInFiles(dir) {
    const files = fs.readdirSync(dir);
    let problematicFiles = [];

    files.forEach((file) => {
        const fullPath = path.join(dir, file);

        if (fs.lstatSync(fullPath).isDirectory()) {
            // Recursively search in subdirectories
            problematicFiles = problematicFiles.concat(searchErrorInFiles(fullPath));
        } else if (fullPath.match(/\.(js|jsx|ts|tsx)$/)) {
            // Only check JavaScript/TypeScript files
            const content = fs.readFileSync(fullPath, 'utf-8');

            // Check if the file uses useState, useEffect, or other hooks
            const usesStateOrEffect = content.includes('useState') || content.includes('useEffect');
            const hasUseClient = content.includes('"use client"') || content.includes("'use client'");

            // Log why the file is flagged
            if (usesStateOrEffect && !hasUseClient) {
                console.log(`Detected useState or useEffect in ${fullPath} without "use client"`);
                problematicFiles.push(fullPath);
            } else if (!usesStateOrEffect && hasUseClient) {
                console.log(`Detected "use client" in ${fullPath} without useState or useEffect`);
            }
        }
    });

    return problematicFiles;
}

function runErrorDetection() {
    console.log('Running error detection script...');

    const problematicFiles = searchErrorInFiles('./src'); // Adjust the folder path if needed

    if (problematicFiles.length > 0) {
        console.log('Components potentially causing issues (missing "use client" or using hooks inappropriately):');
        problematicFiles.forEach((filePath) => {
            console.log(`- ${filePath}`);
        });
    } else {
        console.log('No problematic files found based on the current detection rules.');
    }
}

runErrorDetection();
