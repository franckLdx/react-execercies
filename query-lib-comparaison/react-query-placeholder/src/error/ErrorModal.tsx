import React, { ReactElement } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ErrorModal(): ReactElement<any, any> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClose = () => {};

  return (
    <AlertDialog
      isOpen={true}
      leastDestructiveRef={undefined}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Oups, something went wrong
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
