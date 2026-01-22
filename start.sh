#!/bin/bash

# 个人网站启动脚本

echo "================================"
echo "  启动个人网站本地服务器"
echo "================================"
echo ""

# 检查是否安装了Python
if command -v python3 &> /dev/null; then
    echo "✓ 检测到 Python3"
    echo "启动服务器在 http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "================================"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✓ 检测到 Python"
    echo "启动服务器在 http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "================================"
    echo ""
    python -m http.server 8000
else
    echo "✗ 未检测到 Python"
    echo ""
    echo "请安装 Python 或使用以下命令之一："
    echo "  - npx http-server"
    echo "  - php -S localhost:8000"
    echo ""
fi

