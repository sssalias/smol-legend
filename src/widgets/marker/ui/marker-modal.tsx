import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'

type Props = {
    title: string, // Название объекта
    body: string, // Описание объекта,
    img?: string, // Фотография объекта?
    isOpnen: boolean,
    onOpenChange: () => void
}
const MarkerModal: React.FC<Props> = props => {
    return (
        <Modal isOpen={props.isOpnen} onOpenChange={props.onOpenChange}>
            <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalBody>
                    <img src={props.img}/>
                    <span>{props.body}</span>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default MarkerModal