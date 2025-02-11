# Project Setup Guide

## Setting Environment Variables

To enable debugging and set up the environment correctly, follow the steps below based on your operating system.

### Windows (PowerShell)

1. **Enable Debug Mode:**
   ```powershell
   $env:DEBUG="development:*"
   ```
   This will allow all debug logs to be visible when running the program.

2. **Disable Debug Mode:**
   ```powershell
   Remove-Item Env:DEBUG
   ```
   This will clear the DEBUG environment variable, hiding debug messages.

3. **Set Node Environment to Development:**
   ```powershell
   $env:NODE_ENV="development"
   ```
   This sets the Node.js environment to "development."

### macOS/Linux (Terminal)

1. **Enable Debug Mode:**
   ```bash
   export DEBUG="development:*"
   ```
   This will allow all debug logs to be visible when running the program.

2. **Disable Debug Mode:**
   ```bash
   unset DEBUG
   ```
   This will clear the DEBUG environment variable, hiding debug messages.

3. **Set Node Environment to Development:**
   ```bash
   export NODE_ENV="development"
   ```
   This sets the Node.js environment to "development."

## Running the Program

Once the environment variables are set, run your program as usual:

```bash
node app.js  # Replace with your actual entry file
```

Then go to the below link and see the app live.
 
```bash
https://localhost:3000/
```

## Notes
- These commands only set environment variables for the current session. If you restart your terminal, you'll need to run them again.
- To make environment variables permanent, add the export commands to your shell profile (`~/.bashrc`, `~/.zshrc`, or `~/.bash_profile` for macOS/Linux) or set them permanently in Windows via the system settings.

