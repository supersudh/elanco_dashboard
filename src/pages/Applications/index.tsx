import { useCallback, useEffect, useState } from 'react';
import CustomAutocomplete from '../../components/Autocomplete';
import './Applications.scss';
import API, { extractDataForTable, tableColumnNames } from '../../api/api';
import CustomTable from '../../components/Table';

export default function Applications() {
  const [applications, setApplications] = useState<string[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<string>('');
  const [tableData, setTableData] = useState<Array<any>>([[]]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      const results = await API.fetchApplications();
      setApplications(results);
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      if (selectedApplication.length) {
        setIsLoading(true);
        const data = await API.fetchApplicationsByName(selectedApplication);
        setTableData(extractDataForTable(data));
        setIsLoading(false);
      }
    })();
  }, [selectedApplication]);

  const handleSelectApplication = useCallback((term: string) => {
    setSelectedApplication(term);
  }, []);
  
  return (
    <div className="dataPanel">
      <div className="dataPanelInner">
        <CustomAutocomplete
          title="Applications"
          onSelect={handleSelectApplication}
          items={applications}
          placeHolder="Search for Applications"
        />
        <CustomTable
          columnNames={tableColumnNames}
          rowData={tableData}
          loading={isLoading}
        />
      </div>
    </div>
  );
}