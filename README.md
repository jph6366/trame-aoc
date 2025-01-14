trame-aoc
=========

Advent of Code using Trame!

(https://trame-aoc-czdyaferdehpcfd7.canadacentral-01.azurewebsites.net/index.html)[DEMO]
MAY TAKE A FEW MINUTES TO LOAD

Trame offers the ability to write pythonic front end code and allows for easy to use customization (through available widgets and out of box libraries) and the innate ability to work seamlessly locally and across the web.

Originally inspired by https://github.com/mgtezak/Advent-of-Code-Puzzle-Solver
Their use of streamlit ( another Python framework to build interactive web apps )
motivated my initialization of my own version to begin my Trame development experience.

* Free software: MIT License


Installing
----------

Configure, Build, and Install Cpp Project
.. code-block:: console

    cd wasm-components/aoc-cpp
    cmake -S . -B build
    cmake --build build --target aoc-2024-wasm

then move the generated  '*aoc-2024-wasm.mjs', and 'aoc-2024-wasm.wasm*'
to trame_aoc/module/serve/wasm/ to reflect the registered modules using wasm.py
C++23 project for advent of code mirrored from https://github.com/PascalGuenther/AdventOfCode2024/
And the aoc-2024-wasm executable command mirror Kitware's vtkWasmSceneManager: https://gitlab.kitware.com/vtk/vtk/-/tree/master/Web/WebAssembly


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
