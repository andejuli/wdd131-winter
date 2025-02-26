function isInputSafe(input) {
    return !/[<>{}$"`;]/.test(input); // Checks for dangerous characters
  }
  
  export function checkForInjection(form) {
    for (const input of form.querySelectorAll("input, textarea")) {
      if (!isInputSafe(input.value)) {
        alert(`Suspicious input detected in ${input.name}`);
        return false;
      }
    }
    return true;
  }
  
  