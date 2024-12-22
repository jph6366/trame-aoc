trame-aoc
=========

Advent of Code using Trame!


* Free software: MIT License


Installing
----------

Configure, Build, and Install Cpp Project
.. code-block:: console

    cd wasm-components/aoc-cpp
    cmake -S . -B build
    cmake --build build --target aoc-2024-web

then move the generated  '*aoc-2024-wasm.js', 'aoc.js', and 'aoc-2024-wasm.wasm*'
to trame_aoc/module/serve/wasm/ to reflect the configuration in wasm.py
Cpp setup portion mirrored from https://github.com/PascalGuenther/AdventOfCode2024/


Build and install the Vue components

.. code-block:: console

    cd vue-components
    npm i
    npm run build
    cd -

Install the application

.. code-block:: console

    pip install -e .


Run the application

.. code-block:: console

    trame-aoc

Features
--------
