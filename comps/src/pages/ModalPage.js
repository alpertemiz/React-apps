import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar =
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
            Here is agreement for you to accept
        </p>
    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>

            {showModal && modal}


            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor erat, viverra non rutrum vitae, pellentesque eget turpis. Fusce ac est sem. Proin vel porta nisi. Nulla pulvinar nec purus sit amet iaculis. Pellentesque ipsum nunc, ornare ut lorem in, euismod rhoncus metus. Phasellus ultricies tortor id tincidunt cursus. Donec semper eleifend dolor, et mollis tellus consequat in. Curabitur pretium gravida tempor. Quisque ut sollicitudin ante. Phasellus nec bibendum risus. Sed efficitur a purus ut convallis. Phasellus justo nulla, dapibus sed cursus sit amet, sodales at justo. Nullam ac sapien eu massa malesuada tempor. Suspendisse potenti. Maecenas et hendrerit turpis. Duis feugiat odio quam, suscipit sagittis augue aliquam ut.
            </p>


        </div>
    )
}

export default ModalPage