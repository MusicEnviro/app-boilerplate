import React from 'react';
import './App.css'

function App() {
  return (
		<div className="App">
			<header>APP BOILERPLATE (TITLE)</header>
			<div id="main">
				<h1>
					the content, in the main div.
					</h1> 
					<h2>
						some characteristics of this boilerplate:
					</h2>
					<ul>
						<li>it's an unejected create-react-app with --template typescript</li>
						<li>but some of the junk is cleared out</li>
						<li>it's set up to run as an electron app (and I think it builds)</li>
						<li>it uses Prettier for code formatting. Single-quote, tabs, print width 100</li>
						<li>mocha and chai for testing (see example.ts and example.spec.ts)</li>
						<li>linting is turned off (TODO: set it up)</li>
					</ul>
					<h2>
						scripts
					</h2>
					<ul>
						<li><strong>start</strong>react-scripts start</li>
						<li><strong>electron</strong>run as electron app</li>
					</ul>

					
			</div>
		</div>
  );
}

export default App;
