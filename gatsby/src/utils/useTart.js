import { useState } from 'react';


export default function usePizza({ values }) {
  
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
 
  
  // this is the function that is run when someone submits the form
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);


    // gather all the data
    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
      mapleSyrup: values.mapleSyrup,
    };
    // 4. Send this data the a serevrless function when they check out
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // it worked!
      setLoading(false);
      setMessage('Success! Your email has been submitted');
    }
  }

  return {
    error,
    loading,
    message,
    submitOrder
  };
}