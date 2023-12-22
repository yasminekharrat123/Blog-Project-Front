import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, test } from "vitest";

import { useState } from "react";
import Modal from ".";
import { Button } from "../Button";

const ModalTest = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    return (
        <>
            <Button
                $variant="tertiary"
                onClick={() => setIsOpen(true)}
                data-testid="modal-opener"
            >
                Open
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="flex justify-center items-center h-[200px] w-[200px]">
                    <h4>Modal</h4>
                </div>
            </Modal>
        </>
    );
};

describe("Modal", () => {
    beforeAll(() => {
        render(<ModalTest />);
    });

    test("renders the modal", () => {
        expect(screen.queryByTestId("modal")).toBeFalsy();
    });

    test("opens and closes the modal", async () => {
        const opener = screen.getByTestId("modal-opener");
        await userEvent.click(opener);
        expect(screen.queryByTestId("modal")).toBeTruthy();
        await userEvent.click(screen.getByTestId("modal-closer"));
        expect(screen.queryByTestId("modal")).toBeFalsy();
    });
});
