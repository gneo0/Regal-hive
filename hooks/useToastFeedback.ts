import { useEffect } from 'react';
import { toast } from 'sonner';

import { FormPrevState } from '@/typings';

export const useToastFeedback = (state: FormPrevState | undefined) => {
	useEffect(() => {
		if (state?.message && state.success) {
			toast.success(state.message);
		} else if (state?.message && !state?.success) {
			toast.error(state.message);
		}
	}, [state]);
};
