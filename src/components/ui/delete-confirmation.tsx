import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "./dialog";
import { Button } from "./button";
import useDeleteTaskStore from "../../stores/delete-task";


const DeleteConfirmation: React.FC = () => {
  const { open, setOpen, onConfirm, taskId } = useDeleteTaskStore();
  const onCancel = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogDescription>Are you sure you want to delete this item? This action cannot be undone.</DialogDescription>
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" className="text-white" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="destructive" className="text-white" onClick={
            () => {
              onConfirm(taskId);
              setOpen(false);
            }
          }>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmation;
