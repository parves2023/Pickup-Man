import React, { useEffect } from 'react';

function IframeComponent() {
  useEffect(() => {
    function setIframeHeight() {
      const iframe = document.getElementById('formIframe');
      const windowHeight = window.innerHeight;
      iframe.style.height = windowHeight + 'px';
    }

    window.addEventListener('resize', setIframeHeight);
    setIframeHeight();

    return () => {
      window.removeEventListener('resize', setIframeHeight);
    };
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-10 max-w-screen-lg md:flex-row flex-col items-center justify-center">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            id="formIframe"
            className="m-auto bg-black text-yellow-50 w-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src="https://docs.google.com/forms/d/e/1FAIpQLScjzh13lVy3nobeHHC_pjJG-eYBc4cGZ6X7dtaInaIcTiVyZA/viewform?embedded=true"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default IframeComponent;
