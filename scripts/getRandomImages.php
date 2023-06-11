<?php
require 'vendor/autoload.php';

// Function to generate a random filename
function generateRandomFilename($extension) {
    $randomString = uniqid();
    return $randomString . '.' . $extension;
}

// Function to download an image from a URL and save it to a file
function saveImageFromUrl($imageUrl, $savePath) {
    echo "Image Filename: " . $imageUrl. PHP_EOL;
    $imageData = file_get_contents($imageUrl);
    file_put_contents($savePath, $imageData);
}

Unsplash\HttpClient::init([
	'applicationId'	=> 'iXZkgzQWxli15xvONOfJo-qh0yREXRhZihI2UU-hbQk',
	'secret'	=> 'keoWBSA4WRT4hn-Jvkh_ta7PadL6zAQm07gUytLldsE',
	'callbackUrl'	=> 'https://your-application.com/oauth/callback',
	'utmSource' => 'Example Images'
]);
$filters = [
   // 'username' => 'andy_brunner',
    'query'    => 'food',
    'w'        => 500,
    'h'        => 500
];
?>

<?php


for($i = 0; $i <= 1000; $i++){
// Image URL
    $imageUrl = Unsplash\Photo::random($filters)->urls['regular'];
    echo $imageUrl . PHP_EOL;

    // Generate a random filename
    $extension = pathinfo($imageUrl, PATHINFO_EXTENSION);
    $filename = generateRandomFilename($extension);

    // Specify the directory where the image will be saved
    $imageDirectory = '/home/pnovack/2023Code/ts-react-boxes/public/boxes-images';

    // Ensure the directory exists
    if (!is_dir($imageDirectory)) {
        mkdir($imageDirectory, 0777, true);
    }

    // Save the image from the URL to a file
    $savePath = $imageDirectory . '/' . $filename;
    saveImageFromUrl($imageUrl, $savePath);

    echo 'Image saved: ' . $filename . PHP_EOL;
    sleep(100);
}


?>
