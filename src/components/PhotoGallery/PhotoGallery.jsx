import "./PhotoGallery.css"
import { useState, useEffect } from "react";

export function PhotoGallery() {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=Odesa%20landmark&gsrnamespace=6&gsrlimit=2&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=400&format=json&origin=*');
                if (!response.ok) throw new Error('Помилка завантаження фото');
                const data = await response.json();
                console.log(data)
                const pages = data.query.pages;
                const temp_photos = Object.values(pages).map(photo => {
                    return photo?.imageinfo?.[0]?.thumburl
                })
                console.log(temp_photos)
                setPhotos(temp_photos);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) return <div className="photoGallery-text">Завантаження...</div>;
    if (error) return <div className="photoGallery-text">Помилка: {error}</div>;

    return (
        <>
            <p className="photoGallery-text">Галерея</p>
            <div className="photoGallery">
                {photos.map((photo) => (
                    <img className="photo" src={photo}/>
                ))}
            </div>
        </>
    )

}
