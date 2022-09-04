import * as React from 'react';
import styles from './RiskCarousel.module.scss';
import { IRiskCarouselProps } from './IRiskCarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { getSP } from '../pnpjsConfig';
import { SPFI, spfi } from '@pnp/sp';
import { Carousel, CarouselButtonsLocation, CarouselButtonsDisplay } from '@pnp/spfx-controls-react/lib/Carousel';

export interface IIPnPjsExampleState {}

export default class RiskCarousel extends React.Component<IRiskCarouselProps, {}> {
	private _sp: SPFI;

	constructor(props: IRiskCarouselProps) {
		super(props);
		// set initial state
		this.state = {};
		this._sp = getSP();
	}

	public componentDidMount(): void {}
	public render(): React.ReactElement<IRiskCarouselProps> {
		return (
			<div className={styles.riskCarousel}>
				<div className={styles.container}></div>
			</div>
		);
	}
}
