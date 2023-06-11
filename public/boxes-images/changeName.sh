#!/bin/bash
let i = 1
for file in *\.3\&q=80\&w=1080\.jpg.jpg.jpg.jpg; do
  let i++
  mv "$file" "${i}.jpg"
done