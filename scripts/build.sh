#!/bin/bash

npx biome check
biome_exit_code=$?

if [ "$biome_exit_code" -ne 0 ]; then
  echo "❌ Biome check failed. Build aborted."
  exit 1
fi

tsup
