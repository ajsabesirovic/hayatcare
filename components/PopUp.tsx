import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
type PopUpProps = {
    clientName: string;
    description: string;
};

export default function PopUp({ clientName, description }: PopUpProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-gray-700 text-white hover:bg-gray-500 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Pogledaj zadatak
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Detalji zadatka</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="mt-4 bg-gray-700 text-white hover:bg-gray-500 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            Zatvori
                        </Button>
                    </DialogClose>
                    <DialogTrigger asChild>
                        {/* <Button className="mt-4 bg-gray-700 text-white hover:bg-gray-500 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            Prihvati zadatak
                        </Button> */}
                        <a
                            href={`https://www.google.com/maps?q=${encodeURIComponent(
                                clientName
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="mt-4 bg-gray-700 text-white hover:bg-gray-500 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                Prihvati zadatak
                            </Button>
                        </a>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
