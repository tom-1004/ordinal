let text = document.getElementById('myText').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Address copied to clipboard');
    } catch (err) {
    //   console.error('Failed to copy: ', err);
    }
  }