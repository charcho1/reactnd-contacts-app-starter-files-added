import React, {Component} from 'react'
//this builds a new comopnent called listcontacts
//el is an ordered list of classname of contac tlist
class ListContacts extends Component {
    render () {
        return (
            <el className = 'contact-list'> 
                {this.props.contact.map((contact)=> (
                    <li key={contact.id} className = 'contact-list-item'>
                        {contact.name}
                    
                        <div 
                            className = 'contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                        }}>
                        </div>
                        <div
                            className = 'contact-details'>
                                <p>
                                    {contact.name}
                                </p>
                                <p>
                                    {contact.handle}
                                </p>

                        </div>
                        <button className='contact-remove'>

                        </button>
                    </li>
                ))}
            </el>
        )
    }// above: we get the passed down contact prop (aka this.props.contact) and map this array  such tath for each contact, we
    //extract the name from it and create a new array. 
    //give each contact a key of id as defined in the contacts array
    //any prop passed onto a component is accessible via this.props object!!!! so any time you pass a prop must access via this.props

}
export default ListContacts