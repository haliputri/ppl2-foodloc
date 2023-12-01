import React from 'react';

function Maps() {
  return (
    <div className="Maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253492.9684735126!2d107.53117671354208!3d-6.911203057753583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c532e567b41b%3A0xace4df8df0c30c3!2sHeyHo*21%20Eatery!5e0!3m2!1sen!2sid!4v1699849948074!5m2!1sen!2sid"
        width="1450"
        height="800"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Maps;