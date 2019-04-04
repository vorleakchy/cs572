In exercise 3, I use video file to reader to browser and my video file size is 269.7 MB.

I've tested with three requests simultaneously for each usage, and the following were my observations:

1. readFileSync, It consumed 777.9 MB of memory.

2. readFile, It consumed about the same memory as readFileSync.

3. Stream, It consumed 52.7 MB of memory.

In the conclusion, we should use Stream which allows the system to manage memory resource efficiently.