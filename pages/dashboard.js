import DashboardShell from '@/components/DashboardShell';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';

const Dashboard = () => {
  return (
    <DashboardShell>
      <FeedbackTableHeader />
      <FeedbackTable />
    </DashboardShell>
  );
};
export default Dashboard;
