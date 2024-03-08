const submitButton = document.querySelector('a'); // Assuming there's only one submit button with an anchor tag (adjust selector if needed)

submitButton.addEventListener('click', function () {
  const allInputs = document.querySelectorAll('input');
  const areAllFilled = ![...allInputs].some(input => input.value === ''); // Check if any input is empty using spread syntax and some()

  if (areAllFilled) {
    const section = document.querySelector('.section');
    section.style.opacity = 0;
    section.style.position = 'absolute';

    const formDetails = document.createElement('div'); // Create a single container for form details
    formDetails.classList.add('form-details'); // Add a class for styling (optional)
    document.body.appendChild(formDetails);

    const title = document.createElement('h1');
    title.textContent = 'Your Form Details';
    formDetails.appendChild(title);

    for (const input of allInputs) {
      const label = document.createElement('p'); // Use paragraphs for cleaner display
      label.textContent = `${input.id}: ${input.value}`;
      formDetails.appendChild(label);
    }

    section.style.display = 'none'; // Hide the original section
  } else {
    const checkbox = document.querySelector('#acceptPolicy');
    if (checkbox && checkbox.value !== 'on') {
      alert('Please accept our Policy!');
    } else {
      alert('Some Input Fields are Missing!');
    }
  }
});
