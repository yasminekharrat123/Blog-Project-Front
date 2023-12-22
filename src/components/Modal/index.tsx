"use client";

import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export type ModalsInitialProps = {
    isOpen: boolean;
    onClose: () => void;
};

export type ModalProps = React.PropsWithChildren<ModalsInitialProps>;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ children, isOpen, onClose }, ref) => {
        useEffect(() => {
            const closeOnEscapeKey = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    onClose();
                }
            };

            window.addEventListener("keydown", closeOnEscapeKey);
            return () => {
                window.removeEventListener("keydown", closeOnEscapeKey);
            };
        });
        return (
            isOpen && (
                <div
                    className="top-0 left-0 absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
                    data-testid="modal"
                >
                    <div
                        className="bg-white rounded-xl shadow-custom p-4 relative"
                        ref={ref}
                    >
                        <button
                            className="absolute top-2 right-2"
                            onClick={onClose}
                            data-testid="modal-closer"
                        >
                            <IoClose className="text-black h-6 w-6" />
                        </button>
                        {children}
                    </div>
                </div>
            )
        );
    }
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
