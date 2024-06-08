import {
    createFileRoute,
    useNavigate,
} from "@tanstack/react-router";
import {
    MutationDialog,
    useRouterServiceContext,
} from "@marzneshin/features/services";
import { useDialog } from "@marzneshin/hooks";


const ServiceEdit = () => {
    const [editDialogOpen, setEditDialogOpen] = useDialog(true);
    const value = useRouterServiceContext()
    const navigate = useNavigate({ from: "/services/$serviceId/edit" });

    return value && (
        <MutationDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            entity={value.service}
            onClose={() => navigate({ to: "/services" })}
        />
    );
}

export const Route = createFileRoute('/_dashboard/services/$serviceId/edit')({
    component: ServiceEdit
})
