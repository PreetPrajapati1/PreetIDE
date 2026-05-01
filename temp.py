import time

# Get current timestamp
seconds = time.time()
print(f"Timestamp: {seconds}")

# Convert to readable format
local_time = time.ctime(seconds)
print(f"Readable: {local_time}")

# Pause the program for 2 seconds
print("Waiting...")
time.sleep(2)
print("Done!")