import React from 'react';
export const placeHolderContent = <div className="App">
	<header>APP BOILERPLATE (TITLE)</header>
	<div id="main">
		<h1>the content, in the main div.</h1>
		<h2>some characteristics of this boilerplate:</h2>
		<ul>
			<li>it's an unejected create-react-app with --template typescript</li>
			<li>but some of the junk is cleared out</li>
			<li>it's set up to run as an electron app (still need to work on build)</li>
			<li>
				it uses Prettier for code formatting.Single-quote, tabs, print width 100
			</li>
			<li>mocha and chai for testing (see example.ts and example.spec.ts)</li>
			<li>linting is turned off (TODO: set it up)</li>
		</ul>
		<h2>scripts</h2>
		<table className="script-table">
			<colgroup>
				<col style={{ width: 200 }}></col>
			</colgroup>
			<tbody>
				{[
					['start', 'the usual, react-scripts start'],
					['build', 'the usual, react-scripts build'],
					['electron-start', 'start as an electron app'],
					['test', 'run mocha tests for **/*.spec.ts']
				].map((a, i) => {
					return (<tr key={i}>
						<td>{a[0]}</td>
						<td>{a[1]}</td>
					</tr>);
				})}
			</tbody>
		</table>
	</div>
</div>;
