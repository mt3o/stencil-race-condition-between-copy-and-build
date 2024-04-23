
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-u4yltmxd3a',
  shadow: true,
})
export class Cu4yltmxd3a {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  