import React, { useState } from 'react';
import Loader from '../Loaders/Loader';

import styles from './GenImageForm.module.css';

function GenImageForm() {
  const [prompt, setPrompt] = useState(null);
  const [image, setImage] = useState(null);
  const [imageU, setImageU] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getImage(event) {
    event.preventDefault();
    setLoading(true);
    async function query(data) {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/minimaxir/sdxl-wrong-lora',
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGKEY}`,
          },
          method: 'POST',
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return result;
    }
    const response = await query({ inputs: prompt });
    console.log(response);
    await setImage(response);
    await setLoading(false);
  }

  function preview() {
    if (image === null) return;
    var imageBlob = image;
    var filename = 'myimage.jpg';

    var imageUrl = null;

    try {
      imageUrl = URL.createObjectURL(imageBlob);
    } catch (error) {
      console.error('Error creating Object URL:', error);
    }
    setImageU(imageUrl);
  }

  return (
    <div className={`${styles.cont}`}>
      <form onSubmit={getImage} className={`${styles.form}`}>
        <div className={`${styles.container}`}>
          <input
            type='text'
            name='prompt'
            id='prompt'
            onChange={(event) => {
              setPrompt(event.target.value);
            }}
            className={`${styles.input}`}
            required
          />
          <label className={`${styles.label}`}>Image Descreption</label>
        </div>
        {!loading && (
          <button type='submit' className={`${styles.button}`}>
            Generate Image
          </button>
        )}
      </form>
      {loading && <Loader />}

      {image && (
        <div className={`${styles.preButton}`}>
          <button onClick={preview} className={`${styles.pbutton}`}>
            Preview
          </button>
          <a href={imageU} target='blank' className={`${styles.pbutton}`}>
            Download
          </a>
        </div>
      )}

      {imageU && (
        <span className={styles.logo}>
          <img
            src={imageU}
            id='imageElement'
            alt='Image'
            width={100}
            className={`${styles.genImage}`}
          />
        </span>
      )}
    </div>
  );
}

export default GenImageForm;
