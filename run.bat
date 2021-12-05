@echo off

pip install tornado
npm init -y
python server.py
echo y|npx electron .