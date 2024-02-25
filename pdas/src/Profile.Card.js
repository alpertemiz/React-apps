function ProfileCard({ title, handle, image }) {

    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>title is {title}</div>
            <div>handle is {handle}</div>
        </div>
    )
}

export default ProfileCard