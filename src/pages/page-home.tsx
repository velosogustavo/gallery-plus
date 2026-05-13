import Container from "../components/container";
import AlbumsFilter from "../contexts/album/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";


export default function PageHome() {
    return (
    <Container>

        <AlbumsFilter albums={[
            {id: '123', title: 'album 1'},
            {id: '456', title: 'album 2'},
            {id: '789', title: 'album 3'},
        ]} className="mb-9" loading/>
        

        <PhotosList photos={[
            {
            id: 'abc',
            title: 'Ola mundo',
            imageId: 'portrait-tower.png',
            albums: [
                {id: '123', title: 'album 1'},
                {id: '456', title: 'album 2'},
                {id: '789', title: 'album 3'},
            ]
        },
            {
            id: '123',
            title: 'Ola mundo',
            imageId: 'portrait-tower.png',
            albums: [
                {id: '123', title: 'album 4'},
                {id: '456', title: 'album 5'},
                {id: '789', title: 'album 6'},
            ]
        },
        ]}/>
    </Container>
    );
}

