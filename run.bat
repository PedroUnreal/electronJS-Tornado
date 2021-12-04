@echo off

pip install tornado
npm init -y
npm install --save-dev electron
python server.py
npx electron %CD%