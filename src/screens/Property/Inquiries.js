import React from 'react';
import { Box, Heading, Text, Spinner, DataTable } from 'grommet';
import { useInquiriesContext } from '../../contexts';

function Inquiries() {
  const { data: inquiries, loading } = useInquiriesContext();

  return (
    <Box>
      <Box direction="row" gap="small" align="center" justify="between">
        <Box direction="row" gap="small" align="center">
          <Heading level="2">Inquiries</Heading>
        </Box>
        {inquiries?.length > 0 && <Text>{inquiries.length} total</Text>}
      </Box>
      <Box>
        <DataTable
          columns={[
            {
              property: 'name',
              header: <Text weight="bold">Name</Text>,
              primary: true,
            },
            {
              property: 'email',
              header: <Text weight="bold">Email</Text>,
            },
            {
              property: 'phone',
              header: <Text weight="bold">Phone</Text>,
            },
            {
              property: 'notes',
              header: <Text weight="bold">Notes</Text>,
              render: (datum) => (
                <Box style={{ width: '100%', maxWidth: 700 }}>
                  <Text style={{ whiteSpace: 'nowrap' }} truncate>
                    {datum.notes}
                  </Text>
                </Box>
              ),
            },
          ]}
          data={inquiries}
        />
        {loading && (
          <Box pad="medium" direction="row" justify="center">
            <Spinner />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Inquiries;
