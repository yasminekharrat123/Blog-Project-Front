import { useState } from "react";
import Modal from ".";
import { Button } from "../Button";

export default {
    title: "Components/Modal",
    component: Modal,
    argTypes: {
        isOpen: {
            control: {
                type: "boolean",
            },
        },
    },
};

export const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    return (
        <>
            <Button $variant="tertiary" onClick={() => setIsOpen(true)}>
                Open Modal
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="flex justify-center items-center h-[200px] w-[200px]">
                    <h4>Modal</h4>
                </div>
            </Modal>
        </>
    );
};
