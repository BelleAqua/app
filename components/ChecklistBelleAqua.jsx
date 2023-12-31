/** @format */

'use client';

import validate from '@/models/validate';

export default function ChecklistBelleAqua() {
	if (!validate('BelleAqua')) return;

	function openTile(event, name) {
		const tiles = document.getElementsByClassName('tile');

		for (const tile of tiles) {
			if (tile.classList.contains(name)) tile.classList.remove('selected');
		}

		for (const child of event.target.parentElement.children) {
			const component = document.getElementById(`${child.id}-data`);
			component.classList.add('hidden');
		}

		event.target.classList.add('selected');

		document.getElementById(`${event.target.id}-data`)?.classList.toggle('hidden');
	}

	function openId(event) {
		for (const child of event.target.parentElement.children) {
			child.classList.remove('selected');
		}

		event.target.classList.add('selected');

		for (const item of document.getElementById('belleaqua-items').children) {
			item.classList.add('hidden');

			if (event.target.id == `${item.id}-button`) item?.classList.remove('hidden');
		}
	}

	function check(event) {
		event.target.classList.toggle('checked');
	}

	function reset() {
		for (const div of document.getElementsByClassName('checklist')) {
			for (const child of div.children) {
				child.classList.remove('checked');
			}
		}
	}

	return (
		<div id="belleaqua-data" className="hidden component">
			<div className="flex">
				<div id="ba" className="tile installation selected" onClick={(event) => openTile(event, 'installation')}>
					Axylit
				</div>
				<div id="bs" className="tile installation" onClick={(event) => openTile(event, 'installation')}>
					SAF zonder Telemetrie
				</div>
				<div id="bsmt" className="tile installation" onClick={(event) => openTile(event, 'installation')}>
					SAF met Telemetrie
				</div>
				<div id="bsmtmpp" className="tile installation" onClick={(event) => openTile(event, 'installation')}>
					SAF met Telemetrie met Pompput
				</div>
				<div id="bsztmpp" className="tile installation" onClick={(event) => openTile(event, 'installation')}>
					SAF zonder Telemetrie met Pompput
				</div>
			</div>
			<div className="component" id="ba-data">
				<div className="toolbar flex">
					<div id="checklist-button" className="tab selected" onClick={openId}>
						Checklist
					</div>
					<div id="cmr-button" className="tab" onClick={openId}>
						CMR
					</div>
					<div id="logo-button" className="tab" onClick={openId}>
						Logo
					</div>
					<div id="schema-button" className="tab" onClick={openId}>
						Schema
					</div>
					<div id="reset-button" className="tab" onClick={reset}>
						Reset
					</div>
				</div>
				<div id="belleaqua-items">
					<div className="checklist" id="checklist">
						<div onClick={check} className="checkbox"></div>
						checklist
					</div>
					<div className="hidden" id="cmr">
						cmr
					</div>
					<div className="hidden" id="logo">
						logo
					</div>
					<div className="hidden" id="schema">
						schema
					</div>
				</div>
			</div>
			<div className="hidden component" id="bs-data">
				SAF zTele
			</div>
			<div className="hidden component" id="bsmt-data">
				SAF mTele
			</div>
			<div className="hidden component" id="bsmtmpp-data">
				SAF mTele mPP
			</div>
			<div className="hidden component" id="bsztmpp-data">
				SAF zTele mPP
			</div>
		</div>
	);
}
