// import React, { Component } from 'react'
//
// // import CampaignCategoryTile from '../components/CampaignCategoryTile'
//
// class CampaignIndexContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       sortedCampaigns: [],
//     }
//   }
//
//   componentDidMount() {
//     fetch('/api/v1/campaign.json')
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           let errorMessage = `${response.status} (${response.statusText})`,
//             error = new Error(errorMessage);
//           throw(error);
//         }
//       })
//       .then(response => {
//         return response.json()
//       })
//       .then(body =>
//         this.setState({ sortedCampaigns: body.categories }),
//       )
//       .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//
//   searchHandler(event) {
//     let searchWord = event
//     this.setState({searchTerm: searchWord});
//   }
//
//   render() {
//     let floofData = this.state.sortedCampaigns
//     let floofCategoryTileComponents;
//
//     if (floofData !== []) {
//       floofData = this.state.sortedCampaigns.filter((floof) => {
//         return floof.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) != -1;
//       })
//
//       floofCategoryTileComponents = floofData.map((category) => {
//         if (category.floofs.length !== 0) {
//
//           return(
//
//               <CampaignCategoryTile
//                 key={ category.id }
//                 category={ category.name }
//                 floofData={ category.floofs }
//               />
//           )
//         }
//       })
//     }
//
//     return(
//       <div>
//         <div className="intro">
//         <h1>This component mounted</h1>
//         </div>
//         // {floofCategoryTileComponents}
//       </div>
//     )
//   }
// }
//
// export default CampaignIndexContainer;
