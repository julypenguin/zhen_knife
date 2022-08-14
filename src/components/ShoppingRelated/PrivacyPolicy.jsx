import React, { Fragment } from 'react';
import classnames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import data from './privacyPolicy.json'

const PrivacyPolicy = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold mb-4'>
                <FormattedMessage id={`shoppingProcess.privacy_policy.${data.title_intl}`} />
            </h2>

            {data.policy_list.map((policy) => (
                <ul key={policy.id}>
                    {!!policy.title &&
                        <div className='inline-block border border-gray-400 text-2xl font-bold px-1 py-2 mb-4 rounded'>{policy.title}</div>
                    }

                    {policy.desc_list.map((desc) => (
                        <li
                            key={desc.id}
                            className={classnames(`text-xl leading-10 list-${desc.list_style}`, {
                                [`mb-${desc.space}`]: desc.space,
                                'font-bold': desc.is_important,
                                [`text-${desc.color}-400`]: desc.color,
                                'ml-16': desc.list_style !== 'none'
                            })}
                        >
                            {desc.desc_intl ?
                                <FormattedMessage id={`shoppingProcess.privacy_policy.${desc.desc_intl}`} />
                                :
                                desc.itme_list.map((item) => (
                                    <Fragment key={item.id}>
                                        {!item.href ?
                                            <span
                                                className={classnames('text-xl', {
                                                    'font-bold': item.is_important,
                                                    [`text-${item.color}-500`]: item.color
                                                })}
                                            >
                                                <FormattedMessage id={`shoppingProcess.privacy_policy.${item.item_intl}`} />
                                            </span>
                                            :
                                            <Link
                                                to={item.href}
                                                className={classnames('text-xl', {
                                                    'font-bold': item.is_important,
                                                    [`text-${item.color}-500`]: item.color
                                                })}
                                            >
                                                <FormattedMessage id={`shoppingProcess.privacy_policy.${item.item_intl}`} />
                                            </Link>
                                        }
                                    </Fragment>
                                ))
                            }
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

export default PrivacyPolicy;