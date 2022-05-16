const path = require('path');
const os = require('os');
const fs = require('fs');

// TODO
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Desktop/Pictures', folder);

if(!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Pictures');
  return;
}

console.log(workingDir);

// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

// 파일이 존재하지 않을 때 파일 생성 
// 폴더를 만들고, 파일을 처리해주어야 하기 때문에 동기적으로 처리할 수 있는 mkdirSync 사용
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234 (IMG_E1234)
// readdir : 모든 파일 출력
fs.promises
  .readdir(workingDir)
  .then(processFiles)
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, captureDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match
}

function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXX
  if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find(f => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  fs.promises
    .rename(oldPath, newPath)
    .catch(console.error);
}