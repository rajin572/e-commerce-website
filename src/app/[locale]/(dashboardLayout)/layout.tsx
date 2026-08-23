import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/shared/Sidebar";
import DashboardTopBar from "@/components/shared/DashboardTopBar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SidebarProvider>
            <Sidebar />
            <div className="flex min-w-0 flex-1 flex-col">
                <DashboardTopBar />
                <div className="flex min-w-0 flex-1 bg-background-color">
                    <main className="min-w-0 flex-1 h-[calc(100svh-64px)] overflow-y-auto scrollbar-none p-4 md:p-8">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default MainLayout;
