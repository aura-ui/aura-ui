import * as React from 'react';
import { ToastProviderProps, ToastProviderValues } from './Toast';

type ToastProviderWithoutChildren = Omit<ToastProviderProps, 'children'>;

const ToastContext = React.createContext<
  ToastProviderWithoutChildren & {
    setState: React.Dispatch<ToastProviderWithoutChildren>;
  }
>({
  swipeDirection: 'right',
  swipeThreshold: 50,
  label: 'Notification',
  duration: 5000,
  setState: () => {},
});

const ToastProvider = ({ children }: Pick<ToastProviderProps, 'children'>) => {
  const [state, setState] = React.useState<ToastProviderWithoutChildren>({
    swipeDirection: 'right',
    swipeThreshold: 50,
    label: 'Notification',
    duration: 5000,
  });

  return (
    <ToastContext.Provider
      value={{
        swipeDirection: state.swipeDirection,
        swipeThreshold: state.swipeThreshold,
        label: state.label,
        duration: state.duration,
        setState: setState,
      }}
    >
      <ToastProviderValues
        swipeDirection={state.swipeDirection}
        swipeThreshold={state.swipeThreshold}
        duration={state.duration}
        label={state.label}
      >
        {children}
      </ToastProviderValues>
    </ToastContext.Provider>
  );
};

const useToast = () => React.useContext(ToastContext);

export { ToastProvider, useToast };
