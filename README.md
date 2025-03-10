# typescriptFilter

## Fixing TypeScript Installation Error

I encountered a **TypeScript installation error** when running `tsc --version` after installing TypeScript globally. Below is how I fixed it. Just in case it occurs.

## Problem

When running:

```sh
tsc --version
```

I got the following error:

```sh
tsc : File C:\Users\DELL\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system.
```

## Solution

### 1️⃣ Enable Execution of Scripts in PowerShell

Run the following command in **PowerShell (Run as Administrator)**:

```sh
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```

- If prompted, type `A` (Yes to All) and press **Enter**.

### 2️⃣ Ensure TypeScript is Installed Correctly

If TypeScript is not installed, install it globally using npm:

```sh
npm install -g typescript
```

### 3️⃣ Update or Create `tsconfig.json`

If `tsconfig.json` does not exist, create it by running:

```sh
tsc --init
```

Then, update the module settings:

#### **For ES Modules:**

```json
{
  "module": "NodeNext",
  "moduleResolution": "Node"
}
```

#### **For CommonJS:**

```json
{
  "module": "CommonJS"
}
```

### 4️⃣ Restart VS Code and Check TypeScript Version

Close and reopen **VS Code**, then verify TypeScript installation:

```sh
tsc --version
```

✅ If successful, it should display the installed TypeScript version.

### Running the Application

To execute the TypeScript application in VS Code, use:

```sh
ts-node app.ts
```

This will run the `app.ts` file directly in the terminal.
# typescript-task2
