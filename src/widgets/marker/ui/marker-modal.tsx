import { Modal, ModalContent, ModalHeader } from '@nextui-org/react'

type Props = {
    title: string, // Название объекта
    body: string, // Описание объекта,
    img?: string, // Фотография объекта?
    isOpnen: boolean,
    onOpenChange: () => void
}
const MarkerModal: React.FC<Props> = props => {
    return (
        <Modal>
            <ModalContent>
                <ModalHeader></ModalHeader>
            </ModalContent>
        </Modal>
    )
}
export default MarkerModal