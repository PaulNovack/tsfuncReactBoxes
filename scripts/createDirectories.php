<?php

// Function to create directories for storing the boxes images
function createDirectories($baseDir) {
    for ($i = 0; $i < 100; $i++) {
        $dir = sprintf('%02d', $i);
        $dirPath = $baseDir . '/' . $dir;
        echo $dirPath . PHP_EOL;
        mkdir($dirPath);

        for ($j = 0; $j < 100; $j++) {
            $subDir = sprintf('%02d', $j);
            $subDirPath = $dirPath . '/' . $subDir;
            echo $subDirPath . PHP_EOL;
            mkdir($subDirPath);
        }
    }
}

// Specify the base directory where the directories will be created
$baseDirectory = '/home/pnovack/2023Code/ts-react-boxes/public/boxes-images';

// Call the function to create the directories
createDirectories($baseDirectory);

?>