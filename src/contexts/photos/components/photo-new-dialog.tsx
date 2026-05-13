import { DialogClose } from "@radix-ui/react-dialog";
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/input-single-file";
import ImagePreview from "../../../components/image-preview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import type { Album } from "../../album/models/album";
import { useForm } from "react-hook-form";

interface PhotoNewDialogProps{
    trigger: React.ReactNode;
}



export default function PhotoNewDialog({trigger}: PhotoNewDialogProps) {
    const form = useForm();

    // TODO: Apenas para mock, pegar da API em breve
    const isLoadingAlbum = false
    const albums: Album[] = [
            {id: '123', title: 'album 1'},
            {id: '456', title: 'album 2'},
            {id: '789', title: 'album 3'},
        ]


    return <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
            <DialogHeader>Adicionar foto</DialogHeader>

            <DialogBody className="flex flex-col gap-5">
                <InputText
                  placeholder="Adicione um titulo"
                  maxLength={255}
                />

                <Alert>
                    Tamanho máximo: 50MB.
                    <br />
                    Você pode selecionar arquivos em PNG, JPG, JPEG
                </Alert>

                <InputSingleFile 
                    form={form}
                    allowedExtensions={['png', 'jpg', 'jpeg']}
                    maxFileSizeInMB={50}
                    replaceBy={
                       <ImagePreview 
                        className="w-full h-56"
                       />
                    }
                />
                
                <div className="space-y-3">
                        <Text variant="label-small">Selecionar Álbuns</Text>
                    
                    <div className="flex flex-wrap gap-3">
                        {!isLoadingAlbum && 
                        albums.length > 0 && 
                        albums.map((album) => (
                            <Button 
                            key={album.id}
                            variant="ghost"
                            size="sm"
                            className="truncate"
                            >
                                {album.title}
                            </Button>
                        ))}


                        {isLoadingAlbum && Array.from({length: 5}).map((_,index) => (
                            <Skeleton key={`album-loading-${index}`} className="h-7 w-20" />
                        ))}
                    </div>
                </div>
            </DialogBody>
                
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="secondary">Cancelar</Button>
                </DialogClose>

                <Button>Adicionar</Button>
            </DialogFooter>


        </DialogContent>
    </Dialog>
}